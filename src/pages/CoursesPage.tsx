import React, {useContext} from 'react'
import {useProducts} from '../hooks/products'
import {ModalContext} from '../common/ModalContext'
import {ICourse} from '../models/ICourse'
import {Loader} from '../common/Loader'
import {ErrorMessage} from '../common/ErrorMessage'
import {CourseInfo} from '../components/CourseInfo/CourseInfo'
import {Modal} from '../common/Modal'
import {CreateCource} from '../components/CourseInfo/CreateCource'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faRemove} from "@fortawesome/free-solid-svg-icons";
import {EditCourse, InitCourse} from "../components/CourseInfo/EditCourse";
import {Button} from "../common/Button";

export const CoursesPage = () => {
    const {loading, error, courses, addCourse, deleteProduct} = useProducts()
    const {modalNew, modalEdit, openNew, openEdit, close} = useContext(ModalContext)


    const btnBasedBgClassName = ' py-2 px-4 border'
    const btnDeleteBgClassName = 'bg-red-400 ' + btnBasedBgClassName
    const btnEditBgClassName = 'bg-blue-400' + btnBasedBgClassName


    const createHandler = (course: ICourse) => {
        close()
        addCourse(course)
    }

    const editCourse = (course: ICourse) => {
        InitCourse(course)
        openEdit()
    }
    const editHandler = (course: ICourse) => {
        close()
    }

    return (
        <div className="container border-2 mx-auto max-w-2xl pt-5">
            {loading && <Loader/>}
            {error && <ErrorMessage error={error}/>}
            {courses.map(course => <div key={course.id}>
                    <CourseInfo course={course} key={course.id}/>
                    <div className="border py-2 px-4 rounded flex items-center mb-2">
                        <Button buttonClass={btnEditBgClassName} children={<FontAwesomeIcon icon={faEdit}/>}
                                onButtonClick={() => {
                                    editCourse(course)
                                }}></Button>
                        <Button buttonClass={btnDeleteBgClassName} children={<FontAwesomeIcon icon={faRemove}/>}
                                onButtonClick={() => {
                                    deleteProduct(course)
                                }}></Button>
                    </div>
                </div>
            )}

            {modalNew && <Modal title="Create new product" onClose={close}>
                <CreateCource onCreate={createHandler}/>
            </Modal>}

            {modalEdit && <Modal title="Edit product" onClose={close}>
                {<EditCourse onEdit={editHandler}/>}
            </Modal>}

            <Button
                buttonClass = "fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2"
                onButtonClick={openNew}
            >+
            </Button>
        </div>
    )
};