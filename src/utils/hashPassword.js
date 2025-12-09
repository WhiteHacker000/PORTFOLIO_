// Password hashing utility using Web Crypto API (SHA-256)
export async function hashPassword(password) {
  const encoder = new TextEncoder()
  const data = encoder.encode(password)
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
  return hashHex
}

// Pre-computed hash for "Poiuytrewq@098"
// Generated using: await hashPassword("Poiuytrewq@098")
export const ADMIN_PASSWORD_HASH = '8f434346648f6b96df89dda901c5176b10a6d83961dd3c1ac88b59b2dc327aa4'
