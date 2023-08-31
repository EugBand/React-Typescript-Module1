import axios, {AxiosResponse} from "axios";
import {IResponse} from "../models/IResponse";

export const baseCrudService = () => {
    const baseURL: string = "http://localhost:4000"


    const getAllResources = async <T>(url: string): Promise<IResponse> => {
        return await axios.get<Array<T>>(baseURL + url)
            .then((response: AxiosResponse) => {
                console.log(0, response)
                const result = response.data
                if (result && result.successful) {
                    console.log(1, response)
                    return {status: true, data: result.result, message: "Success"}
                } else {
                    const message = (result.messageList && result.messageList.length > 0) ?
                        result.messageList[0].text : "Error"
                    return {status: false, data: null, message: "Error", exception: message}
                }

            })
            .catch(function (error) {
                return {status: false, data: null, message: "Error", exception: error}
            });
    }

    const getResource = async <T>(url: string, param: any): Promise<IResponse> => {
        return await axios.get<T>(baseURL + url + param)
            .then((response: AxiosResponse) => {
                const result = response.data;
                if (result && result.success) {
                    return {status: true, data: result.data, message: "Success"}
                } else {
                    const message = (result.messageList && result.messageList.length > 0) ?
                        result.messageList[0].text : "Error";
                    return {status: false, data: null, message: "Error", exception: message}
                }
            })
            .catch(function (error) {
                return {status: false, data: null, message: "Error", exception: error}
            });
    }

    const deleteResource = async (url: string, param: any): Promise<IResponse> => {
        return await axios.delete(baseURL + url, {data: param})
            .then((response: AxiosResponse) => {
                const result = response.data;
                if (result && result.success) {
                    return {status: true, data: result.data, message: "Success"}
                } else {
                    const message = (result.messageList && result.messageList.length > 0) ?
                        result.messageList[0].text : "Error";
                    return {status: false, data: null, message: "Error", exception: message}
                }
            })
            .catch(function (error) {
                return {status: false, data: null, message: "Error", exception: error}
            });
    }

    const createResource = async <T>(url: string, obj: T): Promise<IResponse> => {
        return await axios.post(baseURL + url, obj)
            .then((response: AxiosResponse) => {
                const result = response.data;
                if (result && result.success) {
                    return {status: true, data: result.data, message: "Success"}
                } else {
                    const message = (result.messageList && result.messageList.length > 0) ?
                        result.messageList[0].text : "Error";
                    return {status: false, data: null, message: "Error", exception: message}
                }
            })
            .catch(function (error) {
                return {status: false, data: null, message: "Error", exception: error}
            });
    }

    const updateResource = async <T>(url: string, param: any, obj: T): Promise<IResponse> => {
        return await axios.put(baseURL + url + param, obj)
            .then((response: AxiosResponse) => {
                const result = response.data;
                if (result && result.success) {
                    return {status: true, data: result.data, message: "Success"}
                } else {
                    const message = (result.messageList && result.messageList.length > 0) ?
                        result.messageList[0].text : "Error";
                    return {status: false, data: null, message: "Error", exception: message}
                }
            })
            .catch(function (error) {
                return {status: false, data: null, message: "Error", exception: error}
            });
    }

    const processResponse = (response: AxiosResponse): IResponse => {
        const result = response.data;
        if (result && result.success) {
            return {status: true, data: result.data, message: "Success"}
        } else {
            const message = (result.messageList && result.messageList.length > 0) ?
                result.messageList[0].text : "Error";
            return {status: false, data: null, message: "Error", exception: message}
        }
    }

    return {getAllResources, getResource, createResource, updateResource, deleteResource}
}