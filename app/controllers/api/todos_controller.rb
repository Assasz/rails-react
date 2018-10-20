class Api::TodosController < ApplicationController
  # GET /todo
  def index
    @todos = Todo.all.order(:created_at)
    render json: @todos
  end

  # GET /todo/:id
  def show
    @todo = Todo.find(params[:id])
    render json: @todo
  end

  # POST /todo
  def create
    @todo = Todo.new(todo_params)

    if @todo.save
      render json: @todo, status: :created
    else
      render json: @todo.errors, status: :unprocessable_entity
    end
  end

  # PUT /todo/:id
  def update
    $todo = Todo.find(params[:id])

    if $todo.update(todo_params)
      render json: @todo
    else
      render json: @todo.errors, status: :unprocessable_entity
    end
  end

  # DELETE /todo/:id
  def destroy
    $todo = Todo.find(params[:id])

    if @list.destroy
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
