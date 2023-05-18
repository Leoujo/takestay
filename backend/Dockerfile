# A lightweight linux system with python installed
FROM python:3.11

# Going through the process installing Django.
# Work directory to put our folder in.
WORKDIR /app

# Inside our work directory, we're gonna copy our requirements.
COPY requirements.txt  requirements.txt

# Running the requirements text
RUN pip install -r requirements.txt

# Now we're gonna copy all the folders 
# First dot -> This root folder, second dot -> the root folder of the image.
COPY . .

# Running django application in the terminal (CMD) + Making application accessible outside the container (PORT 8000)
# CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]



# Build our container
# docker build --tag python-django

# Running 
# docker run --publish 8000:8000 pythondjango

