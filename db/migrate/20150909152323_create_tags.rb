class CreateTags < ActiveRecord::Migration
  def change
    create_table :tags do |t|
      t.integer :character_id
      t.integer :tag_x
      t.integer :tag_y
      t.boolean :status

      t.timestamps null: false
    end
  end
end
