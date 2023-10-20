from fastapi import APIRouter
from models.card import Card, CardSchema
from sqlalchemy import create_engine
from sqlalchemy.orm import Session
import os
import re


PAGE_SIZE = 20

postgres_password = os.getenv("POSTGRES_PASSWORD")

router = APIRouter()

user = "postgres"
host = "db"
password = postgres_password
port = "5432"
dbname = "ohara"

engine = create_engine(f"postgresql://{user}:{password}@{host}:{port}/{dbname}")


@router.get("/cards")
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


def _split_string_to_components(input_string: str) -> dict:
    pattern = r'(\w+)\s*=\s*("[^"]*"|\S+)'

    matches = re.findall(pattern, input_string)

    result_dict = {
        key: (int(value) if value.isdigit() else value.strip('"'))
        for key, value in matches
    }

    return result_dict


def _get_full_color_name(color: str) -> str:
    color = color.lower()

    if color == "r":
        return "red"
    elif color == "g":
        return "green"
    elif color == "u":
        return "blue"
    elif color == "b":
        return "black"
    elif color == "p":
        return "purple"
    elif color == "y":
        return "yellow"

    else:
        raise ValueError(f"Unknown color: {color}")


def _create_filters(filter_string: str) -> list:
    components = _split_string_to_components(filter_string)
    filters = []

    for key, value in components.items():
        if key == "name":
            filters.append(Card.name.ilike(f"%{value}%"))
        elif key == "color" or key == "c":
            if len(value) == 1:
                value = _get_full_color_name(value)
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
            value = value.replace("-", "")
            filters.append(Card.number.ilike(f"{value}%"))
        else:
            raise ValueError(f"Unknown filter: {key}")

    return filters
