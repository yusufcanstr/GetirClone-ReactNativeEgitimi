import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import productsGetir from '../../../assets/productsGetir'
import CartItem from '../../components/CartItem'

export default function index() {
  return (
    <FlatList
    data={productsGetir.slice(2,3)}
    renderItem={({item}) => <CartItem product={item}/>}/>
  )
}

const styles = StyleSheet.create({})