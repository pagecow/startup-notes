const bcrypt = require("bcryptjs");
const { EMAIL_ADDRESS, EMAIL_PASSWORD } = process.env;
const nodemailer = require("nodemailer");
const { lookup } = require('geoip-lite');

module.exports = {
    sendCode: async (req, res) => {
        const email = req.params.email;
        console.log("sendCode fired!", email);
        const db = req.app.get("db");
    
        let user = await db.get_user(email);
        user = user[0];
    
        let code = "";
        let possible = "0123456789";
    
        if (user) {
          res.send(
            "Email in use."
          );
        } else {
          for (let i = 0; i < 4; i++) {
            code += possible.charAt(Math.floor(Math.random() * possible.length));
          }
        }
    
        if (code.length === 4) {
          const transporter = nodemailer.createTransport({
            service: "SendPulse",
            auth: {
              user: EMAIL_ADDRESS,
              pass: EMAIL_PASSWORD,
            },
          });
    
          let mailOptions = await transporter.sendMail({
            from: `tj@nativenotify.com`,
            to: `${email}`,
            subject: `Startup Notes verification code...`,
            text:
              `Verification code: ${code} \n\n` +
              `Type this code into your Startup Notes sign up page to verify your email is accurate. \n\n` +
              `If you did not request to sign up for NativeNotify.com, disregard this email. \n\n` +
              `- Startup Notes automated message.\n`,
          });
    
          console.log("Message sent: %s", mailOptions.messageId);
    
          console.log("Preview URL: %s", nodemailer.getTestMessageUrl(mailOptions));
    
          console.log(code);
          res.status(201).send(code);
        }
      },
    register: async (req, res) => {
        const { email, password } = req.body;
        console.log("email, password: ", email, password);

        const db = req.app.get("db");

        let result = await db.get_user(email);
        console.log(result);
        existingUser = result[0];
        if (existingUser) {
            return res.send("Email in use.");
        }

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        // const ip = await req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        // const ip = await req.ip;
        const ip = await (req.headers['x-forwarded-for'] || '').split(',').pop().trim() || req.socket.remoteAddress;
        console.log(ip, lookup(ip)); // ip address of the user
        
        let registeredUser = await db.register_user(email, hash, lookup(ip).country);
        registeredUser = await registeredUser[0];
        console.log(registeredUser);

        return res.send(registeredUser);
    },

    login: async (req, res) => {
        const { email, password } = req.body;
        console.log("login fired: ", email);

        const db = req.app.get("db");

        let user = await db.get_user(email);
        user = await user[0];

        if (!user) {
        res
            .status(401)
            .send(
            "User not found. Please register as a new user before logging in."
            );
        }

        const isAuthenticated = bcrypt.compareSync(password, user.password);
        if (isAuthenticated) {
            delete user.password;
            console.log(user);

            return res.send(user);
        }
        res.status(403).send("Incorrect password");
    },

    getUser: async (req, res) => {
        const userId = req.params.userId;
        console.log(userId);

        const db = req.app.get("db");

        let user = await db.get_user_by_id(userId);
        user = await user[0];
        console.log(user);

        res.send(user);
    },

    logout: async (req, res) => {
        const { ip } = req.body;
        console.log("ip: ", ip);

        const db = req.app.get("db");

        let loggedInStatus = await db.update_saved_ip(ip, false);
        console.log("loggedInStatus: ", loggedInStatus);

        res.sendStatus(200);
    },

    resetCode: async (req, res, next) => {
        const { email } = req.body;
        console.log(email);
        const db = req.app.get("db");

        let user = await db.get_user(email);
        user = user[0];

        let code = "";
        let possible = "0123456789";

        if (!user) {
        res.send(
            "Sorry, that email is not associated with a Startup Notes account. Please try again."
        );
        } else {
        for (let i = 0; i < 4; i++) {
            code += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        }

        if (code.length === 4) {
        const transporter = nodemailer.createTransport({
            service: "SendPulse",
            auth: {
            user: EMAIL_ADDRESS,
            pass: EMAIL_PASSWORD,
            },
        });

        let mailOptions = await transporter.sendMail({
            from: `tj@nativenotify.com`,
            to: `${user.email}`,
            subject: `Startup Notes password reset code...`,
            text:
            `${code} is your password reset code. \n\n` +
            `You are receiving this email because a request was made to reset your Startup Notes account password. \n\n` +
            `If you did not request this, please ignore this email and your password will remain unchanged.\n\n` +
            `- Startup Notes Automated Message`
        });

        console.log("Message sent: %s", mailOptions.messageId);

        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(mailOptions));

        console.log(email, code);
        res.status(201).send({ code: code, user_id: user.user_id });
        }
    },

    resetPassword: async (req, res) => {
        const { email, password, ip } = req.body;
        console.log(email, ip);

        const db = req.app.get("db");

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        let registeredUser = await db.reset_password(email, hash);
        let user = registeredUser[0];

        res.status(201).send(user.id);
    },

    updateEmail: async(req, res) => {
        const db = req.app.get('db');
        const {oldEmail, newEmail} = req.body;
        console.log("oldEmail, newEmail: ", oldEmail, newEmail);

        let checkEmail = await db.get_user(newEmail);
        console.log("checkEmail: ", checkEmail);

        if(checkEmail.length === 0) {
        let response = await db.update_email(oldEmail, newEmail);
        console.log("response: ", response);
    
        res.status(201).send(response);
        } else {
        res.status(422).send();
        }
    },

    deleteUser: async(req, res) => {
        const userId = req.params.userId;
        console.log(userId);

        const db = req.app.get('db');

        let user = await db.get_user_by_id(userId);
        user = user[0];
        console.log(user);

        let user_id = await user.user_id;
        console.log(user_id);
        
        db.delete_user(user_id)
            .then(res.status(200).send('account deleted'))
            .catch(console.log('failure user delete'))
    }
};
