// @solid
import React from 'react';
import { Text, View } from 'react-native';
import { createSignal } from 'solid-native';
import { Container } from './Styles';


const Main: React.FC = () => {
    const[count, setCount] = createSignal(0);

    setInterval(() => {
        setCount(value => value + 1);
    }, 1000);


    return (
        <Container>
            <Text>Hello World! {count()}</Text>
        </Container>
    )
}

export default Main;