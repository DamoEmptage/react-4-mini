import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

function login(props) {

    return (
        <div>
            <h2>Please Log in</h2>

            <form>
                <input placeholder='Username' type='text.' />
                <input placeholder='Password' type='text' />
                <button onClick={e => {
                    e.preventDefault();

                    setTimeout(() => {
                        props.history.push('/2');
                    }, 1000);
                }}>ENTER</button>
            </form>

            <Switch>
                <route
                    path={props.match.path + '/foo'}
                    render={(props) => {
                        console.log('Sub-route-props', props);

                        return <p> Forgot Password?</p>;
                    }} />

                <route path={props.match.path + '/bar'} render={() => <p>Register Here</p>} />
                }}
            </Switch>


        </div>

    )
}

export default login;