<?php 

$name = $_POST['name'];
$company = $_POST['company'];
$email = $_POST['email'];
$message = $_POST['message'];

$mailheader = "From: ".$name."<".$email.">\r\n";

$recipient = "atavizconsulting@gmail.com";

mail($recipient, $company, $message, $mailheader)
or die("Error!");

echo'

<!DOCTYPE HTML>
<!--
    Halcyonic by HTML5 UP
    html5up.net | @ajlkn
    Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
-->
<html>
    <head>
        <title>Ataviz Consulting - Contact Us</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <link rel="stylesheet" href="assets/css/main.css" />
    </head>
    <body class="subpage">
        <div id="page-wrapper">

        <!-- Content -->
            <section id="content">
                <div class="container">
                    <div class="row">
                        <div class="col-12">

                            <!-- Main Content -->
                                <section>
                                    <header>
                                        <h2>Thank you for contacting us</h2>
                                    </header>
                                    <p>

                                    </p>
                                </section>

                        </div>
                    </div>
                </div>
            </section>
        </div>

        <!-- Scripts -->
            <script src="assets/js/jquery.min.js"></script>
            <script src="assets/js/browser.min.js"></script>
            <script src="assets/js/breakpoints.min.js"></script>
            <script src="assets/js/util.js"></script>
            <script src="assets/js/main.js"></script>

    </body>
</html>

';

?>