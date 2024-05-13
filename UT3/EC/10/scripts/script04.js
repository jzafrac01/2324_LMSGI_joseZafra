//Ej 4.1.1

function getUsers(callback) {
  console.log('--- Inicio de la petición ----');

  setTimeout(() => {
    
    const users = [
      { id: 1, name: 'Juan' },
      { id: 2, name: 'Pedro' },
      { id: 3, name: 'María' }
    ];

    console.log(' ::: Petición resuelta :::');
    callback(users);  //llamamos a la función de vuelta (callback)
  }, 2000);

  console.log(' --- Fin de la petición ---');
}

//Obtener los usuarios de internet

async function getUsers(callback) {
  const users = await fetch().getUsers
}

