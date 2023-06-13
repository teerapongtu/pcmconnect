<?php
session_start();
require_once 'login/config/db.php';
if (isset($_SESSION['admin_login'])) {
  header('location: admin/');
} elseif (isset($_SESSION['user_login'])) {
  header('location: user/');
} else {
  $_SESSION['error'] = 'กรุณาเข้าสู่ระบบ!';
  header('location: login/signin.php');
}
?>