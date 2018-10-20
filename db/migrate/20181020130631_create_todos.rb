class CreateTodos < ActiveRecord::Migration[5.1]
  def change
    create_table :todos do |t|
      t.string :title
      t.string :body
      t.datetime :created_at

      t.timestamps
    end
  end
end
