<?php
$conn = mysqli_connect('localhost', 'root', '', 'test');
if (!$conn) {
  echo "Error loading data!";
}

$sql = "SELECT * FROM clients";
$data = mysqli_query($conn, $sql);
$total_rows = mysqli_num_rows($data);
$result = mysqli_fetch_assoc($data);


if ($total_rows == 0) {
  echo "Table has no data";
  return;
}
?>
<html lang="en">
  <head>
  <title>Result</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
    <table id="data-table">
      <thead >
        <th>ID</th> <th class="name-cell">Name</th> <th>Age</th> <th>Education</th>  <th class="email-cell">Email</th>
      </thead>
      <tbody>
        <?php
        
        while ($result = mysqli_fetch_assoc($data)) {
          echo " <tr>
            <td>". $result['id'].         "</td>
            <td class='name-cell'>". $result['Name'].       "</td>
            <td>". $result['Age'].        "</td>
            <td>". $result['Education'].  "</td>
            <td class='email-cell'>". $result['Email'].      "</td>          
          </tr>";        
        }
        ?>
      </tbody>
    </table>
</body>
</html>


