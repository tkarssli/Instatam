class Add < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :full_name, :string, null: false
    add_column :users, :avatar, :string
  end
end
