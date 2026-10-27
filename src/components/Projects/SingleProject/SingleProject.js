
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FaCode, FaExternalLinkAlt } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';

import placeholder from '../../../assets/png/placeholder.png';
import './SingleProject.css';

function SingleProject({ id, name, desc, tags, code, demo, image, theme }) {
    const useStyles = makeStyles((t) => ({
        iconBtn: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 40,
            height: 40,
            borderRadius: 50,
            border: `2px solid ${theme.tertiary}`,
            color: theme.tertiary,
            transition: 'all 0.2s',
            textDecoration: 'none',
            '&:hover': {
                backgroundColor: theme.secondary,
                color: theme.primary,
                transform: 'scale(1.1)',
                border: `2px solid ${theme.secondary}`,
            },
        },
        icon: {
            fontSize: '1.1rem',
            transition: 'all 0.2s',
        },
    }));

    const classes = useStyles();

    return (
        <Fade bottom>
            <div
                key={id}
                className='singleProject'
                style={{ backgroundColor: theme.primary400 }}
            >
                <div className='projectContent'>
                    <h2
                        id={name.replace(' ', '-').toLowerCase()}
                        style={{ color: theme.tertiary }}
                    >
                        {name}
                    </h2>

                    <img
                        src={image ? image : placeholder}
                        alt={name}
                    />

                    <div className='project--showcaseBtn'>
                        {demo && (
                            <a
                                href={demo}
                                target='_blank'
                                rel='noopener noreferrer'
                                className={classes.iconBtn}
                                aria-label={`Live demo of ${name}`}
                                title='Live Demo'
                            >
                                <FaExternalLinkAlt
                                    className={classes.icon}
                                />
                            </a>
                        )}

                        {code && (
                            <a
                                href={code}
                                target='_blank'
                                rel='noopener noreferrer'
                                className={classes.iconBtn}
                                aria-label={`Source code of ${name}`}
                                title='Source Code'
                            >
                                <FaCode className={classes.icon} />
                            </a>
                        )}
                    </div>
                </div>

                <p
                    className='project--desc'
                    style={{
                        background: theme.secondary,
                        color: theme.tertiary,
                    }}
                >
                    {desc}
                </p>

                <div
                    className='project--lang'
                    style={{
                        background: theme.secondary,
                        color: theme.tertiary80,
                    }}
                >
                    {tags.map((tag, index) => (
                        <span key={index}>{tag}</span>
                    ))}
                </div>
            </div>
        </Fade>
    );
}

export default SingleProject;
