import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Traemos la tabla todos
export const { data: todos, error } = await supabase
    .from('todos')
    .select('*')


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