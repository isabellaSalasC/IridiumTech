
// usuarios hardcodeados

// ─── Usuarios de prueba  ─────────
const USUARIOS_PRUEBA = [
  {
    id: 1,
    nombre: 'Usuario Demo',
    correo: 'usuario@empresa.com',
    rolNombre: 'Usuario',
    empleadoVerificado: true,
    ultimaActividad: null,
    avatarUrl: null,
    rachaActual: 3,
  },
  {
    id: 2,
    nombre: 'Admin Demo',
    correo: 'admin@empresa.com',
    rolNombre: 'Administrador',
    empleadoVerificado: true,
    ultimaActividad: null,
    avatarUrl: null,
    rachaActual: 0,
  },
  {
    id: 3,
    nombre: 'Super Admin Demo',
    correo: 'super@empresa.com',
    rolNombre: 'SuperAdministrador',
    empleadoVerificado: true,
    ultimaActividad: null,
    avatarUrl: null,
    rachaActual: 0,
  },
];

// ─── CONSULTAS ────────────────────────────────────────────────

export async function findUserByEmail(correo) {
  return USUARIOS_PRUEBA.find(u => u.correo === correo.toLowerCase().trim()) ?? null;
}

export async function getUserById(id) {
  return USUARIOS_PRUEBA.find(u => u.id === Number(id)) ?? null;
}

export async function getAllUsers() {
  return USUARIOS_PRUEBA;
}

export async function updateLastActivity(userId) {
  // En hardcodeado no persiste, pero no rompe nada
  const u = USUARIOS_PRUEBA.find(u => u.id === Number(userId));
  if (u) u.ultimaActividad = new Date().toISOString();
}

export async function updateUserRole(userId, rolNombre) {
  const u = USUARIOS_PRUEBA.find(u => u.id === Number(userId));
  if (u) u.rolNombre = rolNombre;
}

// ─── RACHA (mock para desarrollo) ────────────────────────────
export async function recordActivity(usuarioId, tipoActividad = 'login') {
  // Mock: siempre retorna éxito sin persistir
  return { racha: 1, esNuevoDia: true, xpGanado: 0 };

}

// ─── STATS SUPERADMIN  ──────────────────────────────────
export async function getPlatformStats() {
  return {
    totalUsuarios: 1,
    totalAdmins:   1,
    totalActivos:  2,
  };

}