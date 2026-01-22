import { exec } from 'child_process';

// Commandes pour lister les processus selon le système d'exploitation
const command = process.platform === 'win32'
  ? 'tasklist' // Commande Windows
  : 'ps -aux'; // Commande Linux/macOS

exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error('Error executing command:', error.message);
    return;
  }
  if (stderr) {
    console.error('Error:', stderr);
    return;
  }

  console.log('--- Process List ---');
  console.log(stdout);
});