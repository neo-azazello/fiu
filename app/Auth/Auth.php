<?php

namespace App\Auth;

use App\Models\User;

class Auth
{
    public function user()
    {
        if (isset($_SESSION['user'])) {
            return User::find($_SESSION['user']);
        } else {
            return null;
        }
    }

    public function check()
    {
        return isset($_SESSION['user']);
    }
    public function attempt($email, $password)
    {
        $user = User::where('useremail', $email)->first();
        if (!$user) {
            return false;
        }
        if (password_verify($password, $user->userpassword)) {
            $_SESSION['user'] = $user->userid;
            $_SESSION['username'] = $user->username;
            $_SESSION['userimage'] = $user->userimage;
            $_SESSION['userrole'] = $user->userrole;
            return true;
        }
        return false;
    }

    public function logout()
    {
        unset($_SESSION['user']);
        unset($_SESSION['username']);
        unset($_SESSION['userimage']);
        unset($_SESSION['userrole']);
    }

}
