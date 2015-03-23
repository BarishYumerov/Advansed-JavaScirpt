poppy._pop('success', 'Success!', 'You have successfully registered.');
poppy._pop('info', 'What to do next...', 'Sign up for hte SoftUni Conf if you haven\'t already!');
poppy._pop('error', 'A fatal error has occurred', 'The server has responded with 404.');
poppy._pop('warning', 'Warning', 'Username cannot be \'nakov\'.', redirect);

function redirect() {
    window.location = 'https://softuni.bg/';
}