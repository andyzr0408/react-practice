/**
 * Componente Presentacional: UserProfile
 * Responsabilidad única: Mostrar la tarjeta de perfil de un usuario.
 * Recibe props: name, role, avatarUrl
 */
export function UserProfile({ name, role, avatarUrl,isOnLine,bio }) {
    return (
        <div className="user-profile-card" style={styles.card}>
            <img src={avatarUrl} alt={`Avatar de ${name}`} style={styles.avatar} />
            <div style={styles.info}>
                <h3 style={styles.name}>{name}</h3>
                {isOnLine ? <span>🟢 En línea</span> : <span>⚪ Desconectado</span>}
                <p style={styles.role}>{role}</p>
                {bio && <p style={styles.bio}>{bio}</p>}
            </div>
        </div>
    );
}

// Estilos básicos en línea para visualizarlo sin dependencias CSS extra
const styles = {
    card: {
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        padding: '16px',
        borderRadius: '12px',
        border: '1px solid #444',
        backgroundColor: '#1e1e1e',
        color: '#fff',
        maxWidth: '350px',
        margin: '12px auto',
    },
    avatar: {
        width: '64px',
        height: '64px',
        borderRadius: '50%',
        objectFit: 'cover',
    },
    info: {
        textAlign: 'left',
    },
    name: {
        margin: '0 0 4px 0',
        fontSize: '1.2rem',
    },
    role: {
        margin: 0,
        color: '#9ca3af',
        fontSize: '0.9rem',
    },
};