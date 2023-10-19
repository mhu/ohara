from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import DeclarativeBase, Session
from sqlalchemy import Column, Integer, Text, create_engine
from pydantic import BaseModel
import re
import os

postgres_password = os.getenv("POSTGRES_PASSWORD")

app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class CardSchema(BaseModel):
    id: int
    cost: int = None
    power: int = None
    attribute: str = None
    counter: int = None
    effect: str = None
    trigger_effect: str = None
    color: str
    card_type: str
    name: str
    life: int = None
    number: str
    rarity: str
    block_symbol: str
    image_link: str

    class Config:
        from_attributes = True


dbname = "ohara"
user = "postgres"
host = "db"  # or IP
password = postgres_password
port = "5432"

engine = create_engine(f"postgresql://{user}:{password}@{host}:{port}/{dbname}")


class Base(DeclarativeBase):
    pass


class Card(Base):
    __tablename__ = "card"

    id = Column(Integer, primary_key=True, autoincrement=True)
    cost = Column(Integer, nullable=True)
    power = Column(Integer, nullable=True)
    attribute = Column(Text, nullable=True)
    counter = Column(Integer, nullable=True)
    effect = Column(Text, nullable=True)
    trigger_effect = Column(Text, nullable=True)
    color = Column(Text, nullable=False)
    category = Column(Text, nullable=False)
    name = Column(Text, nullable=False)
    life = Column(Integer, nullable=True)
    number = Column(Text, nullable=False)
    rarity = Column(Text, nullable=False)
    card_type = Column("type", Text, nullable=False)


def _split_string_to_components(input_string) -> dict:
    components = re.findall(r'(\w+)="([^"]+)"', input_string)

    if input_string.count("=") == 0:
        raise ValueError("Invalid filter string")

    if len(components) != input_string.count("="):
        raise ValueError("Invalid filter string")

    return dict(components)


def _create_filters(filter_string: str) -> list:
    components = _split_string_to_components(filter_string)
    filters = []

    for key, value in components.items():
        if key == "name":
            filters.append(Card.name.ilike(f"%{value}%"))
        elif key == "color" or key == "c":
            filters.append(Card.color.ilike(f"%{value}%"))
        elif key == "rarity":
            filters.append(Card.rarity.ilike(f"%{value}%"))
        elif key == "effect" or key == "e":
            filters.append(Card.effect.ilike(f"%{value}%"))
        elif key == "type" or key == "t":
            filters.append(Card.card_type.ilike(f"%{value}%"))
        elif key == "number":
            filters.append(Card.number.ilike(f"{value}"))
        elif key == "attribute" or key == "a":
            filters.append(Card.attribute.ilike(f"%{value}%"))
        elif key == "cost":
            filters.append(Card.cost == int(value))
        elif key == "power":
            filters.append(Card.power == int(value))
        elif key == "counter":
            filters.append(Card.counter == int(value))
        elif key == "life":
            filters.append(Card.life == int(value))
        elif key == "trigger":
            filters.append(Card.trigger_effect.ilike(f"%{value}%"))
        elif key == "category":
            filters.append(Card.category.ilike(f"%{value}%"))
        elif key == "set":
            filters.append(Card.number.ilike(f"{value}%"))
        else:
            raise ValueError(f"Unknown filter: {key}")

    return filters


PAGE_SIZE = 20


@app.get("/cards")
def read_cards(page: int, filter: str = None, response_model=list[CardSchema]):
    session = Session(engine)

    query = session.query(Card)

    if filter:
        try:
            filters = _create_filters(filter)
        except ValueError as e:
            return {"error": str(e)}

        if filters:
            for f in filters:
                query = query.filter(f)

    cards = query.limit(PAGE_SIZE).offset((page - 1) * PAGE_SIZE).all()
    num_pages = query.count() // PAGE_SIZE + 1

    return {"cards": cards, "page": page, "num_pages": num_pages}
