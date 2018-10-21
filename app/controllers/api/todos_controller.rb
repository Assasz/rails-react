class Api::TodosController < ApplicationController
  # GET /todos
  def index
    @todos = Todo.all.order(updated_at: :desc)
    render json: @todos
  end

  # GET /todos/:id
  def show
    @todo = Todo.find(params[:id])
    render json: @todo
  end

  # POST /todos
  def create
    @todo = Todo.new(todo_params)

    if @todo.save
      render json: @todo, status: :created
    else
      render json: @todo.errors, status: :unprocessable_entity
    end
  end

  # PUT /todos/:id
  def update
    @todo = Todo.find(params[:id])

    if @todo.update(todo_params)
      render json: @todo
    else
      render json: @todo.errors, status: :unprocessable_entity
    end
  end

  # DELETE /todos/:id
  def destroy
    @todo = Todo.find(params[:id])

    if @todo.destroy
      head :no_content, status: :ok
    else
      render json: @todo.errors, status: :unprocessable_entity
    end
  end

  private

  def todo_params
    params.require(:todo).permit(:title, :body)
  end
end
