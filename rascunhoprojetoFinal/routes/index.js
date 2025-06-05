router.get('/', (req, res) => {
    res.render('index', { title: 'Sabor Express' });
});

router.get('/sobre', (req, res) => {
    res.render('sobre', { title: 'Sobre - Sabor Express' });
});

router.get('/contato', (req, res) => {
    res.render('contato', { title: 'Pedido - Sabor Express' });
});

