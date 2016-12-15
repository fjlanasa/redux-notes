class Api::NotesController < ApiController

  def index
    binding.pry
    notes = Folder.find(params[:id]).notes
  end

  def show
    note = Note.find(params[:id]).notes
  end

  def create
    note = Note.new(note_params)
    if note.save
      message = "New Note!"
    else
      message = note.errors.full_messages[0]
    end
    render json: {message: message}, status: :ok
  end

  def update
    note = Note.find(params[:id])
    note.update_attributes(note_params)
    render json: {message: 'Successfully updated your note'}
  end

  def destroy
    note = Note.find(params[:id])
    note.destroy
    render json: {message: 'Your note has been deleted'}
  end

  private
  def note_params
    params.require(:note).permit(:user_id, :folder_id, :body)
  end
end
