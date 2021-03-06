import React from 'react'
import Navbar from '../components/Navbar';
import Carrousel from './Carrousel';
import styles from '../../styles/Header.module.css'


export default function Header(props) {
    if (props.data) {
        return (
            <div >
                <Carrousel />
                <Navbar />
                <div className="row">
                    <div className={styles.headerTitle}>
                        <div className="text-light text-center">
                            <h1 className='text-uppercase fw-light'>{props.data.title}</h1>
                            <p className='fw-light h5 my-4'>{props.data.text}</p>
                            <p>
                                <a
                                    href="https://artpoint.fr/"
                                    rel="noopener noreferrer"
                                    target='_blank'
                                    className="btn btn-lg btn-dark"
                                >
                                    Find Out More  &raquo;
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

