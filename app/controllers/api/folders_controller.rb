class Api::FoldersController < ApiController
  def index
    folders = current_user.folders.reverse
    chosenFolder = folders[0] || {}

    if params[:folderID] != ''
      chosenFolder = Folder.find(params[:folderID].to_i)
    end

    notes = chosenFolder.try(:notes).reverse || []
    chosenNote = notes.first || {}

    if params[:noteID] != ''
      chosenNote = Note.find(params[:noteID].to_i)
    end


    render json: {folders: folders, notes: notes,
      chosenFolder: chosenFolder, chosenNote: chosenNote}, status: :ok
  end

  def create
    folder = Folder.new(folder_params)
    folder.assign_attributes(user_id: current_user.id)
    if folder.save
      message = "New Folder!"
    else
      message = folder.errors.full_messages[0]
    end
    render json: {chosenFolder: folder, folders: current_user.folders.reverse}, status: :ok
  end

  def destroy
    folder = Folder.find(params[:id])
    folder.destroy
    render json: {message: 'Your folder has been deleted'}
  end

  private
  def folder_params
    params.require(:folder).permit(:name)
  end
end
