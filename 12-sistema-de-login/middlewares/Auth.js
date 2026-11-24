// este midleware será invocado a cada requisição do usuários em rotas específicas

function Auth(req, res, next) {
    // verificando se a sessão de usuário existe
    if(req.session.user != undefined) {
        // prossiga
        next();
    } else {
        // chama a página de login
        res.render("login");
    }
}
export default Auth;