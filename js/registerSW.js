if (navigator.serviceWorker) {
  navigator.serviceWorker
    .register('./serviceworker.js')
    .then(() => {
      console.log('Registration successful!');
    })
    .catch(() => {
      console.log('Registration failed!');
    });
}
