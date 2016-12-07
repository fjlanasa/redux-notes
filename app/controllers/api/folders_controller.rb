class Api::FoldersController < ApiController
  # def index
  #   folder = Folder.all
  #   render json: {message}
  # end

  def create
    folder = Folder.new(folder_params)
    if folder.save
      message = "New Folder!"
    else
      message = folder.errors.full_messages[0]
    end
    render json: {message: message}, status: :ok
  end

  def destroy
    folder = Folder.find(params[:id])
    folder.destroy
    render json: {message: 'Your folder has been deleted'}
  end

  private
  def folder_params
    params.require(:folder).permit(:user_id, :name)
  end
end
