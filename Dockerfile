FROM node:alpine

WORKDIR /src/app

COPY . /src/app

RUN npm install -g @angular/cli

RUN npm install

EXPOSE 4200
# ng serve está pensado solo para desarrollo, y no para servir la app compilada
    # Mantiene la app "viva", viendo cambios (hot reload, etc.)
    # Es lento comparado con un server real como Nginx
    # No es óptimo para despliegue real (uso de CPU, memoria, etc.)
CMD [ "ng", "serve", "--host", "0.0.0.0" ] 

# OJO : Paso a paso para ejecutar el contenedor Web tipo Nginx

# 1° PASO:
        # Comenzar con el comando * ng build --configuration production  * (para versiones Angular 12+)
        #         Esto crea una carpeta dist/mi-proyecto/ con todos los archivos listos.

# 2° PASO:
        # CREAR el archivo Dockerfile en la raiz del proyecto.

# 3° PASO:
        # CREAR la imagen Docker con el comando * docker build -t angular-app .

# 4° PASO: 
        # CORRER el contenedor con * docker run -d -p 4200:4200 angular-app