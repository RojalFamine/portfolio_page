<!DOCTYPE html>
<html lang="en">

  <head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <link href="https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap" rel="stylesheet">

    <link rel="stylesheet" type="text/css" href="assets/css/bootstrap.min.css">

    <link rel="stylesheet" type="text/css" href="assets/css/font-awesome.css">

    <link rel="stylesheet" href="assets/css/style.css">

    </head>
    
    <body>
  
    <!-- ***** Header Area Start ***** -->
    <?php include "page-header.php" ?>
    <!-- ***** Header Area End ***** -->

    <section class="section cont">
      <div class="container"> 
        <div class="cta-content">
            <h2>Feel free to Contact Me</h2>
        </div>
      </div>
    </section>

    <!-- ***** Comment section start ***** -->
    
    <script src="js/request.js"></script>

    <!-- https://skola-comment.000webhostapp.com/api.php?api=add -->

    <div class="container comments_section">
        <div class="row justify-content-center">
            <div class="col-lg-6 col g-2 align-self-center">
                <form action="https://skola-comment.000webhostapp.com/api.php?api=add" class="comment_form">
                    <div class="mb-3 form-floating">
                        <input  class="form-control" type="text" name="author" minlength="5" id="comment_author" required>
                        <label for="comment_author">Author</label>
                    </div>
                    <div class="mb-3 form-floating">
                        <textarea class="form-control" name="message" minlength="20"  id="comment_message" cols="30" rows="10" required></textarea>
                        <label for="comment_message">Comment message</label>
                    </div>
                    <div class="mb-3">
                        <button class="btn btn-success" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
        <div class="row justify-content-center">
            <ul id="comment_list" class="col-lg-6 col align-self-center comment">
                <li class="list-group-item comment__item template comment__item--initial">
                    <b class="comment__author">Me</b>
                    <pre class="comment__description"></pre>
                </li>
            </ul>
        </div>
    </div>

    <!-- ***** Comment section end ***** -->
     
    <!-- ***** Down button Start ***** -->
    <div id="click" class="down">
        <a href="#">
            <i class="icon-to-change fa fa-angle-double-down"></i>
        </a>
    </div>
    <!-- ***** Down button End ***** -->
    
    <!-- ***** Footer Start ***** -->
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <p>
                        Copyright © 2020 Company Name
                        - Template by: <a href="https://www.phpjabbers.com/">PHPJabbers.com</a>
                    </p>
                </div>
            </div>
        </div>
    </footer>

    <!-- jQuery -->
    <script src="assets/js/jquery-2.1.0.min.js"></script>

    <!-- Bootstrap -->
    <script src="assets/js/popper.js"></script>
    <script src="assets/js/bootstrap.min.js"></script>

    <!-- Plugins -->
    <script src="assets/js/scrollreveal.min.js"></script>
    <script src="assets/js/waypoints.min.js"></script>
    <script src="assets/js/jquery.counterup.min.js"></script>
    <script src="assets/js/imgfix.min.js"></script> 
    <script src="assets/js/mixitup.js"></script> 
    <script src="assets/js/accordions.js"></script>
    
    <!-- Global Init -->
    <script src="assets/js/custom.js"></script>

  </body>
</html>