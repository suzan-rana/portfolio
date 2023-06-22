import { useEffect, useState } from 'react';
import styles from './Cursor.css';

function Cursor(){

    const [position, setPosition] = useState({ x: -100, y: -100 });
    const [hasMoved, setHasMoved] = useState(false);

    useEffect(() => {
        const setFromEvent = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
            setHasMoved(true);
        };
        window.addEventListener('mousemove', setFromEvent);
        return () => {
            window.removeEventListener('mousemove', setFromEvent);
        };
      }, []);

    const cursorClasses = `${styles.cursor} ${hasMoved ? styles.active : ''}`;

    return(
        <div 
            className={cursorClasses}
            style={{ 
                left: `${position.x - 7}px`, 
                top: `${position.y - 7}px` 
                }}
        >
        </div>
    )
}

export default Cursor;