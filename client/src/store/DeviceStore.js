import {makeAutoObservable} from 'mobx'

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: "Холодильник"},
            {id: 2, name: "Смартфон"},
            {id: 3, name: "Ноутбук"}
        ]
        this._brands = [
            {id: 1, name: "LG"},
            {id: 2, name: "Apple"},
            {id: 3, name: "Lenovo"}
        ]

        this._devices = [
            {id: 1, name: "Realme 10", price: 110000, rating: 0, img: "http://127.0.0.1:8080/8e640bf6-71fa-43b6-93fd-6e2d1e6e9849.jpg", typeId: 2, brandId: 2},
            {id: 2, name: "Realme 10", price: 110000, rating: 0, img: "http://127.0.0.1:8080/8e640bf6-71fa-43b6-93fd-6e2d1e6e9849.jpg", typeId: 2, brandId: 2},
            {id: 3, name: "Realme 10", price: 110000, rating: 0, img: "http://127.0.0.1:8080/8e640bf6-71fa-43b6-93fd-6e2d1e6e9849.jpg", typeId: 2, brandId: 2},
            {id: 4, name: "Realme 10", price: 110000, rating: 0, img: "http://127.0.0.1:8080/8e640bf6-71fa-43b6-93fd-6e2d1e6e9849.jpg", typeId: 2, brandId: 2},
            {id: 5, name: "Realme 10", price: 110000, rating: 0, img: "http://127.0.0.1:8080/8e640bf6-71fa-43b6-93fd-6e2d1e6e9849.jpg", typeId: 2, brandId: 2},
            {id: 6, name: "Realme 10", price: 110000, rating: 0, img: "http://127.0.0.1:8080/8e640bf6-71fa-43b6-93fd-6e2d1e6e9849.jpg", typeId: 2, brandId: 2}
        ]

        this._selectedType = {}
        this._selectedBrand = {}
        this._selectedDevice = {}

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

    setSelectedType(type) {
        this._selectedType = type
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand
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

    get selectedType() {
        return this._selectedType
    }
    
    get selectedBrand() {
        return this._selectedBrand
    }
    get selectedDevice() {
        return this._selectedDevice
    }

}