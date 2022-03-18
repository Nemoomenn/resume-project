const HomeController = (req, res) => {
  res.render('index', {
    'title': 'Homepage',
  });
}

export {HomeController};