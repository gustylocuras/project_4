<?php
$dbconn = null;
if(getenv('DATABASE_URL')){
$connectionConfig = parse_url(getenv('DATABASE_URL'));
$host = $connectionConfig['host'];
$user = $connectionConfig['user'];
$password = $connectionConfig['pass'];
$port = $connectionConfig['port'];
$dbname = trim($connectionConfig['path'],'/');
$dbconn = pg_connect(
"host=".$host." ".
"user=".$user." ".
"password=".$password." ".
"port=".$port." ".
"dbname=".$dbname
);
} else {
$dbconn = pg_connect("host=localhost dbname=animals");
}

class Pet {
  public $id;
  public $name;
  public $image;
  public $description;

  public function __construct($id, $name, $image, $description){
    $this->id = $id;
    $this->name = $name;
    $this->image = $image;
    $this->description = $description;
  }
}

class Pets {
  static function all(){
    $pets = array();

    $results = pg_query("SELECT * FROM pets");

    $row_object = pg_fetch_object($results);
    while($row_object){
      $new_pet = new Pet(
        intval($row_object->id),
        $row_object->name,
        $row_object->image,
        $row_object->description
      );
      $pets[] = $new_pet;
      $row_object = pg_fetch_object($results);
    }
    return $pets;
  }

  static function create($pet){
    $query = "INSERT INTO pets (name, image, description) VALUES ($1, $2, $3)";
    $query_params = array($pet->name, $pet->image, $pet->description);
    pg_query_params($query, $query_params);
    return self::all();
  }

  static function update($updated_pet){
    $query = "UPDATE pets SET name = $1, image = $2, description = $3 WHERE id = $4";
    $query_params = array($updated_pet->name, $updated_pet->image, $updated_pet->description, $updated_pet->id);
    $result = pg_query_params($query, $query_params);

    return self::all();
  }

  static function delete($id){
    $query = "DELETE FROM pets WHERE id = $1";
    $query_params = array($id);
    $result = pg_query_params($query, $query_params);

    return self::all();
  }
}



 ?>
