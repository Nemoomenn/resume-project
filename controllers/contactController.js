const contactController = (req, res) => {
  res.render('contact', {
    'title': 'Contact Me',
  });
}

export {contactController};