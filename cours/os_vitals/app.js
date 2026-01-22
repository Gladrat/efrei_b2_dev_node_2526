import os from "os";

function formatUptime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);
  return `${hours}h ${minutes}m ${secs}s`;
}

const vitals = {
  OS_Type: os.type(),
  OS_Release: os.release(),
  Hostname: os.hostname(),
  Total_Memory: `${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)} GB`,
  Free_Memory: `${(os.freemem() / 1024 / 1024 / 1024).toFixed(2)} GB`,
  Used_Memory: `${((os.totalmem() - os.freemem()) / 1024 / 1024 / 1024).toFixed(
    2
  )} GB`,
  CPU_Architecture: os.arch(),
  CPU_Cores: os.cpus().length,
  CPU_Model: os.cpus()[0].model,
  Uptime: formatUptime(os.uptime()),
};

console.log(vitals);
