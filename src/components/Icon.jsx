import styles from "../styles/icon.module.css";

function Icon({ icon, label }) {
    return (
        <div className={styles.icon}>
            {icon}
            {label}
        </div>
    );
}

export default Icon;
