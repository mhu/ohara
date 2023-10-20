from sqlalchemy.orm import DeclarativeBase
from sqlalchemy import Column, Integer, Text
from pydantic import BaseModel


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
