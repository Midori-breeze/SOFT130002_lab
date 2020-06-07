<?php require_once('config.php');
?>
<!DOCTYPE html>
<html>
<body>
<h1>Database Tester (PDO)</h1> <?php
try {
    $pdo = new PDO(DBCONNSTRING,DBUSER,DBPASS);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sql = "select * from Artists order by LastName";
    $result = $pdo->query($sql);
    while ($row = $result->fetch()) {
        echo $row['ArtistID'] . " - " . $row['LastName'] . "<br/>";
    }
    $pdo = null;
}catch (PDOException $e) {
    die( $e->getMessage() );
}
?>

<main class="ui container">
    <div class="ui secondary segment">
        <h1>User Input</h1>
    </div>
    <div class="ui segment">
        <div class="ui grid">
            <div class="four wide column">
                <div class="ui link list">
                    <?php outputArtists();
                     ?>
                </div>
            </div>
            <div class="twelve wide column">
                <div class="ui items">
                    <?php outputPaintings();
                   ?>
                </div>
            </div>
        </div>
    </div>
</main>
</body>
</html>