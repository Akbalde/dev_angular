# Django REST Framework Project

Welcome to this Django REST Framework project! This project provides a RESTful API built using Django and Django REST Framework. Follow the instructions below to set up the project, run it, and test the API using Postman.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/hams94/simpleapi.git
    cd simpleapi
    ```

2. Create a virtual environment and activate it:

    ```bash
    python3 -m venv venv
    source venv/bin/activate
    ```

3. Install dependencies:

    ```bash
    pip install -r requirements.txt
    ```

## Running the Project

1. Make migrations:

    ```bash
    python manage.py makemigrations student
    python manage.py migrate
    ```

2. Create a superuser (optional):

    ```bash
    python manage.py createsuperuser
    ```

3. Start the development server:

    ```bash
    python manage.py runserver
    ```

4. Access the API at `http://127.0.0.1:8000/`.

## Testing the API with Postman

1. Download and install [Postman](https://www.postman.com/downloads/).

2. Import the Postman collection located at `/Student.postman_collection.json`.

3. Run the collection and test each API endpoint.

## API Endpoints

- **GET /api/students/**: Retrieve a list of items.
- **POST /api/students/**: Create a new item.
- **GET /api/students/<id>/**: Retrieve a single item by ID.
- **PUT /api/students/<id>/**: Update an existing item by ID.
- **DELETE /api/students/<id>/**: Delete an item by ID.



## License

This project is licensed under the MIT License - see the [MIT](LICENSE) file for details.
