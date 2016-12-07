class AddUserColumns < ActiveRecord::Migration[5.0]
  def change
    add_column :notes, :user_id, :integer, presence: true
    add_column :folders, :user_id, :integer, presence: true
  end
end
