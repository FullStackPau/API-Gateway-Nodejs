# Inventory Service Express Typescript
## Requirements
NODE >= 18 \
Docker


## Installation and Starting Development Project
``` docker compose up --build ```

## Endpoint Documentation
Port Access 8200 \
http://localhost:8200/inventory \
http://localhost:8200/client

## Endpoint List
http://localhost:8200/{service}/list GET \
http://localhost:8200/{service}/new POST \
http://localhost:8200/{service}/:id PUT \
http://localhost:8200/{service}/:id DELETE

### Inventory Body (POST, PUT Inventory)
{
    name: String,
    stock: Number,
    description: String
}

### Client Body (POST, PUT Inventory)
{
    name: String,
    email: Number,
    phonenumber: String
}



