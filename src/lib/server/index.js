import supabase from './createClient'

export const { data: todos, error } = await supabase.from("todos").select("*");

// Funciones para agregar, modificar y eliminar de todos de la base de datos

/**
 * Agregar nuevas tareas
 * @param {string} todo El titlem (texto/nombre) de la tarea
 */
export const addTodo = async (todo) => {
    const { data, error } = await supabase
        .from('todos')
        .insert([
            { titlem: todo, status: false },
        ])
}

/**
 * Actualiza el status de la tarea de false a true ()
 * @param {number} id  id de la tarea
 */
export const completeTodo = async (id) => {
    const { data, error } = await supabase
        .from('todos')
        .update({ status: true })
        .eq('id', id)
}

/**
 * Elimina la tarea
 * @param {number} id id de la tarea
 */
export const deleteTodo = async (id) => {
    const { data, error } = await supabase
        .from('todos')
        .delete()
        .eq('id', id)

}