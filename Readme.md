# Readme

# To deploy:

## Build frontend;

`ng build --prod`

## Move frontend build into backend:

`ShapeSlate\frontend\dist\frontend\* -> ShapeSlateDeploy\src\main\resources\static\*`

## Optional, build war:

`mvn package`