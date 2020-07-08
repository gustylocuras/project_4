<?php
include_once __DIR__ . '/../models/pets.php';
header('Content-Type: applications/json');
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");

if ($_REQUEST['action'] === 'index') {
  echo json_encode(Pets::all());
} elseif ($_REQUEST['action'] === 'post') {
  $request_body = file_get_contents('php://input');
  $body_object = json_decode($request_body);
  $new_pet = new Pet(null, $body_object->name, $body_object->image, $body_object->description);
  $all_pets = Pets::create($new_pet);
  echo json_encode($all_pets);
} elseif ($_REQUEST['action'] === 'update') {
  $request_body = file_get_contents('php://input');
  $body_object = json_decode($request_body);
  $updated_pet = new Pet($_REQUEST['id'], $body_object->name, $body_object->image, $body_object->description);
  $all_pets = Pets::update($updated_pet);
  echo json_encode($all_pets);
} elseif ($_REQUEST['action'] === 'delete') {
  $all_pets = Pets::delete($_REQUEST['id']);
  echo json_encode($all_pets);
}

 ?>
