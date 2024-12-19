// Função para adicionar um usuário à lista
function addUser(list, user) {
    list.push(user);
  }
  
  // Função para remover um usuário da lista pelo id
  function removeUser(list, id) {
    const index = list.findIndex(user => user.id === id);
    if (index !== -1) {
      delete list[index];  // Usando delete para remover o usuário
    } else {
      alert('Usuário não encontrado');
    }
  }
  
  // Função para listar todos os usuários
  function listUsers(list) {
    for (const user of list) {
      if (user !== undefined) {  // Verifica se o usuário existe (não foi removido)
        alert(`ID: ${user.id}, Nome: ${user.name}, Email: ${user.email}`);
      }
    }
  }
  
  // Função para buscar um usuário pelo email
  function findUserByEmail(list, email) {
    return list.find(user => user.email === email);
  }
  
  // Exemplo de uso
  let users = [
    { id: 1, name: 'João', email: 'joao@example.com' },
    { id: 2, name: 'Maria', email: 'maria@example.com' }
  ];
  
  // Adicionar um novo usuário
  addUser(users, { id: 3, name: 'Pedro', email: 'pedro@example.com' });
  
  // Remover um usuário
  removeUser(users, 2);
  
  // Listar usuários
  listUsers(users);
  
  // Buscar usuário por email
  let foundUser = findUserByEmail(users, 'pedro@example.com');
  alert(JSON.stringify(foundUser));  // Exibe o usuário encontrado em formato de string
  