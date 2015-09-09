class CreateCharacters < ActiveRecord::Migration
  def change
    create_table :characters do |t|
      t.string :name
      t.integer :real_x
      t.integer :real_y
      t.timestamps null: false
    end
  end
end
