import {makeAutoObservable} from 'mobx'

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: "Холодильник"},
            {id: 2, name: "Смартфон"}
        ]
        this._brands = [
            {id: 1, name: "LG"},
            {id: 2, name: "Apple"}
        ]

        this._devices = [
            {id: 1, name: "Iphone 17", price: 110000, rating: 0, img: "8e640bf6-71fa-43b6-93fd-6e2d1e6e9849.jpg", typeId: 2, brandId: 2},
            {id: 2, name: "Iphone 17", price: 110000, rating: 0, img: "8e640bf6-71fa-43b6-93fd-6e2d1e6e9849.jpg", typeId: 2, brandId: 2},
            {id: 3, name: "Iphone 17", price: 110000, rating: 0, img: "8e640bf6-71fa-43b6-93fd-6e2d1e6e9849.jpg", typeId: 2, brandId: 2}
        ]
        makeAutoObservable(this)
    }

    setTypes(type) {
        this._types = type
    }

    setBrands(brand) {
        this._brands = brand
    }

    setDevices(device) {
        this._devices = device
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get devices() {
        return this._devices
    }
}