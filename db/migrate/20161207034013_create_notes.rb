class CreateNotes < ActiveRecord::Migration[5.0]
  def change
    create_table :notes do |t|
      t.text :body, null: false
      t.belongs_to :folder
      t.timestamps
    end
  end
end
